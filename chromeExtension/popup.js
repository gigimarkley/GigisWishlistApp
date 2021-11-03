let addToWishlistButton = document.querySelector("#addToWishlist");
let goToWishlistSiteButton = document.querySelector("#goToWishlistSite");
let switchWishlistsSelector = document.querySelector(".switchWishlists");

chrome.storage.sync.get(["wishlists"], function ({ wishlists }) {
  wishlists.forEach((element) => {
    let option = document.createElement("option");
    option.text = element.name;
    document.querySelector(".switchWishlists").add(option, null);
  });
});

let selectedWishlist;
switchWishlistsSelector.addEventListener("change", async (event) => {
  const result = document.querySelector(".result");
  selectedWishlist = event.target.value;
});

goToWishlistSiteButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    message: "open_site",
  });
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
    });
  } else {
    alert(`Please select a wishlist first!`);
  }
});
