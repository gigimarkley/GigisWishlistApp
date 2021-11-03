let recent_tab_id = null,
  new_url_data = {};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "open_site") {
    chrome.tabs.create({
      active: true,
      url: "http://localhost:8080/home",
    });
  } else if (request.message === "add_url") {
    new_url_data = { ...request.payload };
    chrome.storage.sync.set({ new_url_data });
    chrome.scripting.executeScript({
      target: { tabId: new_url_data.tabId },
      function: addToWishlistFunc,
    });
  }
});

//SETS COLOR TO BLUE IN CHROME STORAGE
let color = "#33B2FF";
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});

async function addToWishlistFunc() {
  //GETS THE COLOR STORED AND SETS THE DOCUMENT BACKGROUND TO BLUE
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });

  chrome.storage.sync.get("new_url_data", ({ new_url_data }) => {
    params = {
      wishlistId: new_url_data.selected_Wishlist.toString(),
      // wishlistId: "1", //will eventually reference new_url_data.selected_Wishlist
      categoryId: "1",
      name: new_url_data.destination_title,
      link: new_url_data.url,
    };
  });

  //SEND A POST REQ TO APP TO ADD THE PARAMS ITEM TO THE DB
  fetch("http://localhost:8080/api/item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//GET REQ TO APP TO GET THE LIST OF WISHLISTS
chrome.runtime.onInstalled.addListener(() => {
  fetch("http://localhost:8080/api/wishlist/allWishlists/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      //SETS WISHLISTS IN CHROME STORAGE
      let wishlists = data;
      chrome.storage.sync.set({ wishlists }, function () {
        console.log("Value is set to " + wishlists);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
