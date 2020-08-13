import React from 'react';

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      galleryList:[]
    }
  }

  componentDidMount() {
    fetch("https://picsum.photos/v2/list?page=2&limit=5")
      .then((response) => {
        console.log({ response });
        return response.json();
      })
      .then((data) => {
        console.log({ data });

        this.setState({ galleryList: data });
      });
  }
  
  render(){
    return(
      <div>
        <h1>Gallery List</h1>
        {
          this.state.galleryList.map(image => {
            return (
              <div>
                <img src={image.download_url} height={image.height / 10} />
                <h2>Author:{image.author}</h2>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Gallery;