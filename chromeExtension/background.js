let recent_tab_id = null,
  new_url_data = {};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "add_url") {
    new_url_data = { ...request.payload };
    //`Adding ${new_url_data.destination_title} to your ${new_url_data.selected_Wishlist}!`
    let url_data = new_url_data;
    chrome.storage.sync.set({ url_data });

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

function addToWishlistFunc() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
  chrome.storage.sync.get("url_data", ({ url_data }) => {
    // url => url_data.destination_title
    // wishlist => url_data.selected_Wishlist
  });
}
