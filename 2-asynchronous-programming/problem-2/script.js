// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    
    // 1. List all post titles having more than six words
    const titlesWithMoreThanSixWords = posts
      .filter(post => post.title.split(' ').length > 6)
      .map(post => post.title);

    console.log('Post titles with more than six words:', titlesWithMoreThanSixWords);

    // 2. Word frequency map for all body contents of the posts
    const wordFrequencyMap = posts
      .flatMap(post => post.body.split(/\s+/))
      .map(word => word.toLowerCase())
      .filter(word => word.length > 0)
      .reduce((frequencyMap, word) => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
        return frequencyMap;
      }, {});

    console.log('Word frequency map for post bodies:', wordFrequencyMap);
  })
  .catch(error => console.error('Error fetching data:', error));

  