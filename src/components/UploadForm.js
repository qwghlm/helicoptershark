import React from 'react';

export default function UploadForm({ onSubmit }) {
  return <React.Fragment>
    <p>Detect misinformation in a few taps! Get started by uploading an image</p>

    <form action="">
      <div>
        <input type="file" />
      </div>

      <div>
        <button type="button" onClick={(e) => onSubmit()}>Go</button>
      </div>
    </form>
  </React.Fragment>
}
