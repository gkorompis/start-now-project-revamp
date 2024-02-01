import React from 'react';

const CanvaEmbed = () => {
  const embedUrl = "https://www.canva.com/design/DAF7YVXNbz0/view?embed";
  const shareUrl = "https://www.canva.com/design/DAF7YVXNbz0/view?utm_content=DAF7YVXNbz0&utm_campaign=designshare&utm_medium=embeds&utm_source=link";

  return (
    <div>
    <p className="courses-page-title">SYLABUS</p>
      <iframe
        loading="lazy"
        style={{
          position: 'relative',
          width: '600px',
          height: '400px',
          maxHeight: '80vh',
          border: 'none',
          padding: 0,
          margin: "50px",
          overflow: 'hidden',
        }}
        srcDoc={`<iframe src="${embedUrl}" style="width: 600px; height: 600px; border: none;" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>`}
        title="Canva Embed"
      />
      {/* <p>
        <a href={shareUrl} target="_blank" rel="noopener">
          Coding Program Start Now
        </a>
        {' '}
        by Korompis Gracia
      </p> */}
    </div>
  );
};

export default CanvaEmbed;
