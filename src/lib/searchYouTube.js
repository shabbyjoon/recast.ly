var searchYouTube = ({max = 5, query, key = window.YOUTUBE_API_KEY}, callback) => {
  // TODO
  var baseURL = 'https://www.googleapis.com/youtube/v3/search';
  var data = {
    maxResults: max,
    part: 'snippet',
    type: 'video',
    q: query,
    key: key,
  };

  $.ajax({
    url: baseURL,
    type: 'GET',
    data: data,
    success: (data) => {
      callback(data.items);
    },
    failure: (data) => {
      console.log('Error!');
    },
  });
};

window.searchYouTube = searchYouTube;
