export const ProductCard = ({title, img, id, price, priceDiscount, description, category, onClick}) => {
    return ( 
        <div id={id} className="w-[292px] h-fit cursor-pointer" onClick={onClick}>
            <div className="mb-2 rounded-md w-[292px] h-[321px] shadow-stone-50 bg-white p-10">
                <img className="w-full h-full" src={img}  alt="" />
            </div>
            <div className="space-y-1">
                {/* Category */}
                <span className="text-xs font-bold text-lightGray">{category}</span>
                {/* Title */}
                <p className="text-2xl text-darkGray2 line-clamp-1" title={title}>{title}</p>
                {/* Price and Price Discount */}
                <div>
                    <span className="text-lightGray line-through text-2xl mr-2">R${price}</span>
                    <span className="font-bold text-2xl">R${priceDiscount}</span>
                </div>
                {/* Description */}
                <p>{description && description}</p>
            </div>
        </div>
     );
}