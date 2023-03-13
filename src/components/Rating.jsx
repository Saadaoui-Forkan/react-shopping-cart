const Rating = ({rating}) => {
    // console.log(rating)
    return ( 
    <div className="rating">
        {[...Array(5)].map((_, index) => {
        index += 1;
        return (
            <span key={index} className={index <= Math.round(rating) ? "on" : "off"}>
                <i class="fa-solid fa-star"></i>
            </span>
        );
      })}
    </div> );
}
 
export default Rating
