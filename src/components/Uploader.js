import { create } from 'nouislider';
import React, { Component } from 'react';

class Uploader extends Component {
    state = {
        imageUrl: null,
        imageAlt: null,
    }
    saveCarosel = ()=> {
        const options = {
            method: 'POST',
            body: {
                src: this.state.imageUrl,
                altText: this.state.imageAlt
            },
        };
        console.log('girdi..........', this.state.imageUrl, this.state.imageAlt)
        fetch('http://localhost:8086/carosel', options)
        .then(res => res.json())
        .then(res => console.log(res));
    }

    handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('upload_preset', 'xaome46b');
        const options = {
            method: 'POST',
            body: formData,
        };
        // replace cloudname with your Cloudinary cloud_name
        return fetch('https://api.cloudinary.com/v1_1/hatdjwqml/image/upload', options)
            .then(res => res.json())
            .then(res => {
                this.setState({
                  imageUrl: res.secure_url,
                  imageAlt: `An image of ${res.original_filename}`,
                })
                this.saveCarosel()
              })
            .catch(err => console.log(err));
    }

    
    render() {
        return (
            <main className="section">
                <section className="left-side">
                    <form>
                        <div className="form-group">
                            <input type="file" />
                        </div>

                        <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
                    </form>
                </section>
                <section className="right-side">
                    <p>The resulting image will be displayed here</p>
                    {this.state.imageUrl && (
                        <img src={this.state.imageUrl} alt={this.state.imageAlt} className="displayed-image" />
                    )}
                </section>
            </main>
        );
    }
}

export default Uploader;
