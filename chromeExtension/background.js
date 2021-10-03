let recent_tab_id = null,
  new_url_data = {};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "add_url") {
    new_url_data = { ...request.payload };
    chrome.storage.sync.set({ new_url_data });
    chrome.scripting.executeScript({
      target: { tabId: new_url_data.tabId },
      function: addToWishlistFunc,
    });
  } else if (request.message === "open_site") {
    chrome.tabs.create({
      active: true,
      url: "http://localhost:8080/home",
    });
  }
});

let color = "#33B2FF";
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});

async function addToWishlistFunc() {
  // chrome.storage.sync.get("color", ({ color }) => {
  //   document.body.style.backgroundColor = color;
  // });
  // let params = {};
  let name1 = "";
  chrome.storage.sync.get("new_url_data", ({ new_url_data }) => {
    // params = {
    //   wishlistId: "1", //will eventually reference new_url_data.selected_Wishlist
    //   categoryId: "1",
    //   name: new_url_data.destination_title,
    //   link: new_url_data.url,
    // };
    name1 = new_url_data.destination_title;
  });
  params = {
    wishlistId: "1",
    categoryId: "1",
    name: name1,
    link: "BLagsdjkcndsc",
  };
  console.log("NAME", name1);
  // params = {
  //   wishlistId: "1",
  //   categoryId: "1",
  //   name: "FROM EXTENSION!!!",
  //   link: "BLagsdjkcndsc",
  // };

  const response = await fetch("http://localhost:8080/api/item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
}
