import react,{Component} from 'react'
import ReactDOM from 'react-dom';
import Home from '../home/home';
import Header from '../../common/header/header';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import './details.css';
class Details extends Component{
    constructor(){
        super();
        this.state={
            movie:{}
        }
    }

    componentWillMount(){
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov)=>{
            return mov.id===this.props.movieId
        })[0];
        this.setState({currentState});
        console.log(this.state);
    }

    backToHomeHandler=()=>{
        ReactDOM.render(<Home/>,document.getElementById('root'))
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render(){
        let movie = this.state.movie;
        const opts = {
            height:'300',
            width:'700',
            playerVars:{
                autoplay:1
            }
        };
        let artists = movie.artists;

        return(<div className='details'>
            <Header/>
            <div className='back'>
                <Typography onClick={this.backToHomeHandler}>
                    &#60; Back to Home
                </Typography>
            </div>
            <div className='flex-containerDetails'>
                <div className='leftDetails'>
                    <img src={movie.poster_url} alt={movie.title}></img>
                </div>
                <div className='middleDetails'>
                    <div>
                        <Typography variant='headline' component='h2'>{movie.title}</Typography>
                    </div>
                    <div>
                        <Typography><span className='bold'>Genre:  </span>{movie.genres.join(',')}</Typography>
                    </div>
                    <div>
                        <Typography><span className='bold'>Duration:  </span>{movie.duration}</Typography>
                    </div>
                    <div>
                        <Typography><span className='bold'>Release Date:  </span>{movie.release_date.slice(0,10)}</Typography>
                    </div>
                    <div>
                        <Typography><span className='bold'>Rating:  </span>{movie.critics_rating}</Typography>
                    </div>
                    <br/>
                    <div>
                        <Typography><span className='bold'>Plot:  </span><a href={movie.wiki_url}>(WIKI_LINK)</a> {movie.storyline}</Typography>
                    </div>
                    <div className='trailerContainer'>
                        <Typography><span className='bold'>Trailer:</span></Typography>
                        <YouTube videoId={movie.trailer_url.split('?v=')[1]}
                            opts={opts}
                            onReady={this._onReady}/>
                    </div>
                </div>
                <div className='rightDetails'>
                    <div>
                        <Typography><span className='bold'>Artists:  </span></Typography>
                    </div>
                    <div >
                        {artists.map((artist)=>{
                            return(
                                <a className='artists' href={artist.wiki_url} >
                                    <img style={{height:'150px',width:'100px'}} src={artist.profile_url} alt={artist.first_name}  /> 
                                </a>
                                
                            )
                        })
                        }
                    </div>
            
                </div>
            </div>
            </div>)
    }
}

export default Details;