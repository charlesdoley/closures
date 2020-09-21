function outerFunction(url){
    // inside function has memory of outer scope's variable even after outside is done
    fetch(url).then((data)=> {
        console.log(data)
    })
}
const fetchData = outerFunction('https://collectionapi.metmuseum.org/public/collection/v1/objects/437133');
