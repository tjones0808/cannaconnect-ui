import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../../components/layouts/Footer';
import HeaderInner from '../../components/layouts/HeaderInner';

import posts from '../../data/Posts.json';



function SinglePost() {

  const router = useRouter();
    var slug = router.query.slug;
    if (slug === undefined) {
        slug = 'pixel-kit-thinking-inside-the-box-for-a-change';
    }

    // Find the data for the current slug in your JSON data
    const post = posts.find(item => item.slug === slug)

  return (
    <>
      <HeaderInner/>

      <article className="uk-article uk-section uk-section-xlarge@m uk-border-top">
                <div className="uk-container">
                    <header className="entry-header uk-container uk-container-xsmall">
                        <div className="uk-panel uk-text-center">
                            <ul className="uk-subnav uk-subnav-small uk-subnav-dot uk-flex-center uk-text-medium uk-text-muted">
                                <li><a className="uk-text-bold uk-text-primary uk-text-capitalize" href="#0">{post.category}</a></li>
                                <li><span>{post.publishedDate}</span></li>
                            </ul>
                            <h1 className="uk-h3 uk-h1@m uk-margin-medium-top@m">{post.title}</h1>
                            <p className="uk-text-lead uk-text-muted">{post.description}</p>
                        </div>
                    </header>

                    <div className="entry-featured-image uk-panel uk-overflow-hidden uk-radius uk-margin uk-margin-xlarge@m">
                        <canvas width="1200" height="600"></canvas>
                        <Image src={`/images/posts/${post.image}`} alt="Pixel Kit: thinking inside the box for a change" className="uk-cover" data-uk-cover="" loading="lazy"  width={1200} height={600}/>
                    </div>

                    <div className="entry-content uk-container uk-container-xsmall">
                        <div className="uk-panel uk-text-medium uk-text-xlarge@m">
                            <p>Ex illo laudantium perferendis nemo! Impedit a sit, repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                            <h3 className="uk-h4 uk-h3@m uk-margin-large-top">What's the Pixel Kit?</h3>
                            <p>Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                            <ul className="uk-list uk-list-bullet uk-margin-medium@m">
                                <li>The gratest resource any company has is its people</li>
                                <li>By unlocking new thinking and ideas, you can deliver new growth opportunities and transform cultures</li>
                                <li>Empowering people to to generate a pipeline of quality ideas</li>
                            </ul>
                            <figure className="uk-margin-large-top@m">
                                <img className="uk-radius" src={`/images/posts/${post.image}`} alt="Image caption" loading="lazy" />
                                <figcaption className="uk-text-meta uk-text-right uk-margin-2xsmall-top">Image copyright by @yegormeteor on dribbble.</figcaption>
                            </figure>
                            <p>Sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                            <h3 className="uk-h4 uk-h3@m uk-margin-large-top@m">A new Brand Book</h3>
                            <p>Ex illo laudantium perferendis nemo! Impedit a sit, repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                            <p>Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                        </div>
                    </div>

                    <footer className="entry-footer uk-container uk-container-xsmall uk-margin-large-top uk-margin-xlarge-top@m">
                        <div className="uk-panel">
                            <div className="uk-grid-small uk-grid-medium@m uk-child-width-1-1 uk-grid uk-grid-stack" data-uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-grid-small uk-grid-medium@m uk-flex-middle uk-flex-center uk-flex-between@m uk-grid" data-uk-grid="">
                                        <div className="uk-first-column">
                                            <ul className="entry-tags uk-subnav uk-subnav-small uk-text-bold uk-text-muted">
                                                <li><a href="#0">#bitcoin</a></li>
                                                <li><a href="#0">#crypto</a></li>
                                                <li><a href="#0">#collectibles</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="uk-panel uk-flex-middle">
                                                <a href="#add_like" className="uk-button uk-button-small uk-button-danger uk-button-outline uk-button-icon uk-radius-circle" data-toggle-active="" data-not-active-className="uk-button-outline" data-active-className="" data-uk-tooltip="234 Likes" title="" aria-expanded="false">
                                                    <i className="uk-icon-xsmall material-icons not-active">favorite_border</i>
                                                    <i className="uk-icon-xsmall material-icons active">favorite</i>
                                                </a>
                                                <a href="#share_this" className="uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle uk-margin-xsmall-left" data-uk-toggle="" data-uk-tooltip="Share this!" title="" aria-expanded="true">
                                                    <i className="uk-icon-xsmall material-icons">share</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <div className="uk-panel uk-card uk-card-small uk-radius-large uk-background-black-5 dark:uk-background-white-5">
                                        <div className="uk-grid uk-flex-middle uk-flex-center uk-flex-between@m" data-uk-grid="">
                                            <div className="uk-first-column">
                                                <div className="entry-author uk-text-center uk-text-left@m">
                                                    <div className="uk-grid-xsmall uk-flex-middle uk-flex-center uk-flex-between@m uk-grid" data-uk-grid="">
                                                        <div className="uk-width-auto uk-first-column">
                                                            <div className="uk-panel uk-overflow-hidden uk-border-circle">
                                                                <canvas width="80" height="80"></canvas>
                                                                <Image src={`/images/posts/${post.authorImg}`} alt="Bruno Texira" className="uk-cover" data-uk-cover="" loading="lazy"  width={80} height={80} /> <a href="#0" className="uk-position-cover" aria-label="Bruno Texira"></a>
                                                            </div>
                                                        </div>
                                                        <div className="uk-width-expand@m">
                                                            <div className="uk-panel">
                                                                <h4 className="uk-h6 uk-h5@m uk-margin-remove"><a className="uk-link-reset" href="blog-author.html">Bruno Texira</a></h4>
                                                                <p className="uk-text-small uk-margin-2xsmall-top uk-text-muted">Marketing Designer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <ul className="entry-social-links uk-subnav uk-subnav-small">
                                                    <li>
                                                        <a aria-label="twitter" href="https://twitter.com/unistudioco" rel="noopener" target="_blank"><i className="uk-icon-small brand-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a aria-label="facebook" href="https://facebook.com/unistudioco" rel="noopener" target="_blank"><i className="uk-icon-small brand-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a aria-label="behance" href="https://www.behance.net/unistudioco" rel="noopener" target="_blank"><i className="uk-icon-small brand-behance"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="mailto:hi.unistudio@gmail.com"><i className="uk-icon-small material-icons">mail</i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <div className="entry-comments">
                                        <a href="#load_comments" className="uk-button uk-button-large@m uk-button-default uk-button-outline uk-width-1-1">
                                            <i className="material-icons uk-icon-small">chat_bubble_outline</i>
                                            <span>Load comments</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </article>
        <Footer /> 
    </>
  );
}

export default SinglePost;
