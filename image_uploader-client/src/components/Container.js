import React, { useEffect, useState } from 'react'

import { Success } from './Success';
const Container = () => {
    const [image, setImage] = useState("");
    const [uri, setUri] = useState("");

    const url = process.env0.REACT_APP_BACKEND_URL;

    const changeImage = (e) => {
        setImage(e.target.files[0]);
    }

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('upload_preset', 'image-uploader');
        formData.append('imagen', image);
        try {
            const resp = await fetch(url, {
                method: 'POST',
                body: formData
            })
            if (resp.ok){
                const cloudResp = await resp.json();
                setUri(cloudResp.secure_uri);
                return cloudResp.secure_uri;
            }else {
                throw await resp.json()
            }
            
        }catch(error){
            throw error;
        }
    }

  return (
    <div className="container">
        {image !== "" && uri !== '' ?
            (<Success uri = {uri }/>) : 
            (
                <>
                    <p className="title">Upload your image</p>
                    <p className="subtitle">File should be Jpeg, Png...</p>
                    <div className="image-input">
                        <div className="img-placeholder"></div>
                        <div className="text-placeholder">
                            <p>
                                Drag & Drop your image here
                            </p>
                        </div>
                        <input
                            type="file"
                            className="drag-file"
                            onChange={e => {
                                changeImage(e)
                            }}
                        />

                    </div>
                    <p>or</p>
                    <div className="seleccionar-imagen">
                        <p className="text">Choose a file</p>
                        <input
                            type="file"
                            className="btn-file"
                            name='btnSeleccionarArchivo'
                            onChange={e => {
                                changeImage(e)
                            }}
                        />
                    </div>
                </>
            )   
        }
        

    </div>
  )
}

export default Container