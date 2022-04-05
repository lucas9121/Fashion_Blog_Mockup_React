import picture1 from "../images/blog-image-1.jpg"
import picture2 from "../images/blog-image-2.jpg"
export default function Article () {
    return(
        <div className="article">
            <article>
                <time datetime="2022-03-21">03/21/22</time>
                <h2 class="blog-title">On the Street in Brooklyn</h2>
                <img src={picture1} alt="On the Street in Brooklyn" />
                <p>Cray ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero, ab recusandae unde exercitationem earum vel animi laudantium fuga ipsum, et ipsa perspiciatis voluptatem rem corrupti dolorem similique itaque cupiditate. Quia dolorum cupiditate quae iure, officiis hic odio labore quo! Magnam ea repudiandae nemo commodi sint voluptates, magni aperiam qui, quis, vitae cupiditate eum maxime necessitatibus eligendi? Aliquid, dolorem nesciunt. Corporis officiis minima perspiciatis et, architecto debitis hic totam laudantium soluta modi deserunt eum blanditiis ab maiores nam deleniti quia facilis possimus omnis molestiae facere odit fugit? Optio, eveniet nihil? Libero eum aut ducimus officia modi eos tempora voluptatibus quasi. Eum eaque necessitatibus perferendis unde officia, rerum, debitis quod, ut dolor eveniet sed fugit. Error illo quasi ab quibusdam obcaecati.
                </p>
                <a href="#">Continue...</a>
            </article>
            <article>
                <time datetime="2022-03-22">03/22/22</time>
                <h2 class="blog-title">Vintage in Vogue</h2>
                
                <img src={picture2} alt="Vintage in Vogue image" />
                <p>Selfies sunt, dolor sit amet consectetur, adipisicing elit. Ab ea eveniet quos aperiam alias minima praesentium distinctio. Sit molestias odio eaque ipsum, tempora tenetur magni perspiciatis magnam temporibus obcaecati rerum? At! Eius amet odit quasi minima vitae veritatis laborum sequi voluptas consectetur, animi exercitationem necessitatibus, laudantium architecto officia facilis nostrum et, fugit esse temporibus at. Fuga a nihil enim doloremque cum! Ut, quas in eligendi nemo distinctio necessitatibus perspiciatis nisi possimus praesentium vel itaque ipsam iure officia pariatur blanditiis veritatis consequatur. Eaque sunt blanditiis illo quos, quo nesciunt? Reiciendis, exercitationem vel?</p>
                <a href="#">Continue...</a>
            </article>
        </div>
    )
}