import "./Gallery.css";
import romania from "../../../Assets/images/alisa-anton-VJSUSrgN56w-unsplash.jpg"
import france from "../../../Assets/images/bruno-abatti-mEfIhOTH27w-unsplash.jpg"
import china from "../../../Assets/images/charles-postiaux-TnUG2pWraPE-unsplash.jpg"
import africa from "../../../Assets/images/geran-de-klerk-wYy3rvvgjAU-unsplash.jpg"
import africa2 from "../../../Assets/images/harshil-gudka-kfxEUCTUeyg-unsplash.jpg"
import southAmerica from "../../../Assets/images/jakob-owens-zGSWfxtMvJQ-unsplash.jpg"
import northAmerica from "../../../Assets/images/john-bakator-iQOzInmMxEY-unsplash.jpg"
import northAmerica2 from "../../../Assets/images/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg"
import asiaSurfing from "../../../Assets/images/tatonomusic-FFCgotROOTY-unsplash.jpg"
import auto from "../../../Assets/images/tyler-nix-6mze64HRU2Q-unsplash.jpg"
import hawaii from "../../../Assets/images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg"
import statue from "../../../Assets/images/michael-heise-FLn6XDnbVVE-unsplash.jpg"
import athens from "../../../Assets/images/spencer-davis-ilQmlVIMN4c-unsplash.jpg"
import * as jquery from "jquery";
import * as isotope from "isotope-layout"

Object.assign(global, {
    $: jquery,
    jQuery: jquery,
});


function Gallery(): JSX.Element {

// // For Isotopes Course Listing && Gallery 2
// var $grid = $('#cGrid').isotope({
// 	itemSelector: '.grid-item',
// 	layoutMode: 'fitRows'
//   });
//   // filter items on button click
//   $('#filters').on( 'click', 'button', function() {
// 	var filterValue = $(this).attr('data-filter');
// 	// use filterFn if matches value
// 	$grid.isotope({ filter: filterValue });
//   });
  
  
    return (
        <div className="Gallery">
{/* <!-- das ist das 2. NavBar --> */}
<section className="gallery-section2"> 
	<div className="container">
		<div id="filters" className="button-group">       
			<button className="button" data-filter="*">all</button>
			  <button className="button" data-filter=".business">business</button>
			  <button className="button" data-filter=".design">design</button>
			  <button className="button" data-filter=".development">development</button>
			  <button className="button" data-filter=".seo">seo</button>
			  <button className="button" data-filter=".marketing">marketing</button>
		</div>
	</div>
	 {/* <!-- das habe ich hier geschlossen weil das nehmlich flex probleme macht wann dass mehr unten ist.  --> */}
            <section className="page-heading">
			<div className="container">
				<h2>gallery</h2>
			</div>
		</section>
		<section className="gallery-images-section" itemProp="image" itemScope itemType=" http://schema.org/ImageGallery">
			<div className="gallery-img-wrap">
				<a href="images/gallery-img1.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={romania} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img2.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={china} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={africa} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img4.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={france} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img5.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={northAmerica} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img6.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={southAmerica} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img7.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={athens} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img8.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={hawaii} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img9.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={asiaSurfing} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img10.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={statue} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img11.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={auto} alt="gallery-images"/>
				</a>
			</div>
			<div className="gallery-img-wrap">
				<a href="images/gallery-img12.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
					<img src={africa2} alt="gallery-images"/>
				</a>
			</div>

		</section>
		{/* <!-- End of gallery Images --> */}
   </section>

        </div>
    );
}

export default Gallery;
