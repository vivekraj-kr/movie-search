const serialize = function(obj) {
  if(Object.keys(obj).length > 0) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return "?"+str.join("&");
  }
}
  

const apiClient = async (path, data={}) => {
  const updatedData = {
      ...data,
      api_key: "16cbbcbc0e296e7a3ee594562dd1dd0e",
      language: "en-US",
      page: "1",
      include_adult: false
  }

  let url="https://api.themoviedb.org/3/"+path+serialize(updatedData);
  const response = await fetch(url);
  return response.json();
}

export default apiClient;