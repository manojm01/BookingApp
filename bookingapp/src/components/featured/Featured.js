import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "https://bookmystayapi.onrender.com/api/hotels/countByCity?cities=berlin,madrid,london"
  );
  // console.log(data);
  return (
    <div className="featured">
      {loading ? ("Loading please wait"):
        <>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/99/1a/c7/barcelo-imagine.jpg?w=500&h=500&s=1"
              alt=""
              style={{width:"100%"}}
              className="featuredImg"
              loading="lazy" 
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/99/1a/c7/barcelo-imagine.jpg?w=500&h=500&s=1"
              alt=""
              style={{width:"100%"}}
              className="featuredImg"
              loading="lazy" 
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/96/54/22/the-nadler-covent-garden.jpg?w=500&h=500&s=1"
              alt=""
              style={{width:"100%"}}
              className="featuredImg"
              loading="lazy" 
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Featured;
