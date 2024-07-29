import Footer from '../../components/layouts/Footer';
import HeaderInner from '../../components/layouts/HeaderInner';
import posts from '../../data/Posts.json';
import Link from 'next/link';
import Image from 'next/image';
export default function NerkoTemplate() {
  return (
    
        <>		
        <HeaderInner/>
            <div className="uk-margin-top uk-margin-large-top@m">
                <div className="uk-container">
                    <div id="blog-list-container" className="uk-grid uk-grid-row-large@m uk-grid-match" data-uk-grid="">
                            <div className="uk-width-1-1 uk-first-column">
                                <article className="post featured-post uk-card">
                                   
                                    {posts.map((blog, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="uk-grid uk-grid-match uk-flex-between" data-uk-grid="">
                                                <div className="uk-width-8-12@m uk-first-column">
                                                    <div className="featured-image uk-card-media-left uk-panel uk-overflow-hidden uk-radius">
                                                        <canvas width="800" height="480"></canvas>
                                                        <img src={`/images/posts/${blog.image}`} alt="Pixel Kit: thinking inside the box for a change" className="uk-cover" data-uk-cover="" loading="lazy" />  <Link href={`/blog/${blog.slug}`} aria-label="Title" className="uk-position-cover"></Link>
                                                    </div>
                                                </div>
                                                <div className="uk-width-4-12@m">
                                                    <div className="uk-flex-column uk-flex-between">
                                                        <div className="uk-panel">
                                                            <ul className="uk-subnav uk-subnav-small uk-subnav-dot uk-text-small uk-text-muted">
                                                                <li><a className="uk-text-bold uk-text-primary uk-text-capitalize" href="#0">{blog.category}</a></li>
                                                                <li><span>{blog.publishedDate}</span></li>
                                                            </ul>
                                                          
                                                            <Link href={`/blog/${blog.slug}`} aria-label="Title">
                                                            <h2 className="uk-h4 uk-h3@m">{blog.title ? blog.title : 'UI vs. UX: What’s the difference?'}</h2>
                                                            </Link>
                                                              
                                                            <p className="uk-margin-remove-top uk-text-muted">{blog.description}</p>
                                                        </div>
                                                        <div className="uk-grid-xsmall uk-flex-middle uk-margin-top uk-grid" data-uk-grid="">
                                                            <div className="uk-width-auto uk-first-column">
                                                                <div className="uk-panel uk-overflow-hidden uk-border-circle">
                                                                    
                                                                    <Image src={`/images/posts/${blog.authorImg}`} alt="Bruno Texira" className="uk-cover" loading="lazy" width={48} height={48}/>
                                                                </div>
                                                            </div>
                                                            <div className="uk-width-expand">
                                                                <div className="uk-panel">
                                                                    <h4 className="uk-h6 uk-margin-remove">{blog.author}</h4>
                                                                    <p className="uk-text-meta dark:uk-text-gray-60 uk-margin-remove">{blog.authordeg}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }).slice(0, 1)}
                                </article>
                                {posts.map((blog, index) => {
                                    return (
                                        <div className="uk-width-1-3@m uk-grid-margin" key={index}>
                                            <article className="post featured-post gap-middle uk-card">
                                                <div className="featured-image uk-panel uk-overflow-hidden uk-radius">
                                                    <canvas width="460" height="300"></canvas>
                                                    <Image src={`/images/posts/${blog.image}`} alt="Delbo x Diplo to release NFT for Justice Charity" className="uk-cover" data-uk-cover="" loading="lazy" width={460} height={300} /> <Link href={`/blog/${blog.slug}`} aria-label="Delbo x Diplo to release NFT for Justice Charity"  className="uk-position-cover"></Link>
                                                </div>
                                                <div className="uk-panel uk-padding-top">
                                                    <ul className="uk-subnav uk-subnav-small uk-subnav-dot uk-text-small uk-text-muted dark:uk-text-gray-40">
                                                        <li><a className="uk-text-bold uk-text-primary uk-text-capitalize" href="#0">{blog.category}</a></li>
                                                        <li><span>{blog.publishedDate}</span></li>
                                                    </ul>
                                                    <h2 className="uk-h5 uk-h4@m">
                                                        <Link className="uk-link-reset" href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                                    </h2>
                                                    <p className="uk-margin-remove-top uk-text-muted">{blog.description}</p>
                                                </div>
                                            </article>
                                        </div>
                                        )
                                }).slice(1, 7)}
                            </div>                           
                    </div>
                </div>
            </div>
        <Footer/>
        </>
        
  	);
}
