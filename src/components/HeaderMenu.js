import { Container } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';

const HeaderMenu = () => {

    return (
        <div className="headerMenu">
            <Container>
                <div className="headerMenu__container">
                    <div className="headerMenu__category">
                        <h2 className="headerMenu__logo">
                            <a className="headerMenu__toi" href="https://timesofindia.indiatimes.com/">
                                TOI
                            </a>
                        </h2>
                        <p>Briefs</p>
                        <p>Videos</p>
                        <p>City</p>
                        <p>India</p>
                        <p>World</p>
                        <p>Business</p>
                        <p>Tech</p>
                        <p>Cricket</p>
                        <p>Sports</p>
                        <p>Entertainment</p>
                        <p>TV</p>
                        <p>Web Series</p>
                        <p>Life &amp; Style</p>
                        <p>Education</p>
                        <p>Photos</p>
                        <p>Blog</p>
                    </div>
                    <div className="headerMenu__right">
                        <div className="toi-plus">
                            <a className="toi-plus-link" href="https://timesofindia.indiatimes.com/toi-plus">
                                TOI+
                            </a>
                        </div>
                        <SearchIcon className="headerMenu__icon" />
                        <DehazeIcon className="headerMenu__icon"/>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default HeaderMenu
