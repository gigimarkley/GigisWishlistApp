let addToWishlistButton = document.querySelector("#addToWishlist");
let goToWishlistSiteButton = document.querySelector("#goToWishlistSite");
let switchWishlistsSelector = document.querySelector(".switchWishlists");

let selectedWishlist;
switchWishlistsSelector.addEventListener("change", async (event) => {
  const result = document.querySelector(".result");
  selectedWishlist = event.target.value;
});

addToWishlistButton.addEventListener("click", () => {
  if (selectedWishlist) {
    chrome.windows.getCurrent({ populate: true }, (window) => {
      const site_to_add = window.tabs.filter((tab) => tab.active);
      alert(`Adding ${site_to_add[0].title} to your ${selectedWishlist}!`);
      chrome.runtime.sendMessage({
        message: "add_url",
        payload: {
          url: site_to_add[0].url,
          destination_title: site_to_add[0].title,
          selected_Wishlist: selectedWishlist,
          tabId: site_to_add[0].id,
        },
      });
      //       chrome.storage.sync.get("new_url_data", ({ new_url_data }) => {
      //   const params = {
      //     wishlistId: "1", //will eventually reference new_url_data.selected_Wishlist
      //     categoryId: "1",
      //     name: new_url_data.destination_title,
      //     link: new_url_data.url,
      //   };

      //   const response = await fetch("http://localhost:8080/api/item", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(params),
      //   });
      //   const data = await response.json();
      // });
    });
  } else {
    alert(`Please select a wishlist first!`);
  }
});

goToWishlistSiteButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    message: "open_site",
  });
});
