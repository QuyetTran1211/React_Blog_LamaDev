import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?cs=srgb&dl=pexels-archie-binamira-913215.jpg&fm=jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus sunt! Quaerat iusto consequatur, debitis accusantium nemo quas. Consectetur aliquam cumque iste quas eum quia nesciunt ut accusantium veritatis molestias?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam beatae unde, in nulla enim quaerat quasi neque quae et voluptates repellendus repudiandae iste laboriosam, perspiciatis nemo. In labore nulla necessitatibus!
      </p>
    </div>
  )
}
