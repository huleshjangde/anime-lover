const ShortCard = (post) => {
  return (
    <section className='w-screen md:w-96  p-2 h-fit flex gap-4 items-center shadow-md border-b'>
      <div
        className="left w-1/2 md:w-36 h-20  bg-cover bg-center"
        style={{ backgroundImage: `url("${post.image}")` }}
      ></div>
      <div className="right w-1/2">
        <p className="ptitle font-medium w-2/3 line-clamp-2">{post.title}</p>
        <p className="pdesc text-gray-500 text-sm line-clamp-2">{post.post}</p>
      </div>
    </section>
  );
};

export default ShortCard;
