var data = {};

data.getStartupBookmarkId = function() {
  return localStorage.startupBookmarkId;
};

data.setStartupBookmarkId = function(startupBookmarkId) {
  if (!startupBookmarkId) {
    delete localStorage.startupBookmarkId;
  } else {
    localStorage.startupBookmarkId = startupBookmarkId;
  }
};

data.getStartupBookmarks = function(callback) {
  var startupBookmarkId = data.getStartupBookmarkId();
  if (!startupBookmarkId) {
    callback([]);
    return;
  }

  chrome.bookmarks.getChildren(startupBookmarkId, callback);
};
