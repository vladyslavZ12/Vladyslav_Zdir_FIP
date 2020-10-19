(() => {
    fetch('./data/portfolioData.json')
        .then(res => res.json())
        .then(data => {
        console.log(data);

        //here I will call the function
        //that will get the data from portfolioData.json
        //and insert in into html 

        })
        .catch ((err) => {
            console.log(err);
         })
})();