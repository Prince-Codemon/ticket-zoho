import React from 'react'

const Videos = () => {
  return (
      <div id="content">
        {/* "display: flex; width: 100%; flex-wrap: wrap" */}
          <div style={{display: "flex", width: "100%", flexWrap: "wrap" , justifyContent: "center", alignItems: "center"}}>
              <iframe class="box-3" src="https://www.youtube.com/embed/ZJREf0oM9aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="box-3" src="https://www.youtube.com/embed/ZJREf0oM9aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="box-3" src="https://www.youtube.com/embed/ZJREf0oM9aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="box-3" src="https://www.youtube.com/embed/ZJREf0oM9aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="box-3" src="https://www.youtube.com/embed/ZJREf0oM9aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="box-3" src="https://www.youtube.com/embed/ZJREf0oM9aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </div>

  )
}

export default Videos