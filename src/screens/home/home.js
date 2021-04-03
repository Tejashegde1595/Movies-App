import React,{ Component } from "react";
import ReactDOM from 'react-dom';
import Header from "../../common/header/header";
import Details from '../details/details';
import './home.css'
import {withStyles} from '@material-ui/core/styles'
import moviesData from '../../common/movieData';   
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'; 
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import {ListItemText, MenuItem,TextField,Button } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import genres from '../../common/genres';
import artists from '../../common/artists';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    rootMovies: {
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
        flexWrap: 'wrap',
        overflow: 'hidden',
        width:'50vw',
        padding:'30px',
        float:'left'
    },
    gridListTileMovies:{
        backgroundColor:'white',
        marginLeft:'20px',
        height: 750
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
 });

class Home extends Component{
    constructor(){
        super();
        this.state={
            movieName:'',
            genres:[],
            artists:[]
        }
    }

    onChangeMovieNameHandler=(event)=>{
        this.setState({movieName:event.target.value});
        console.log(this.state.movieName);
    }

    genreSelectHandler=(event)=>{
        this.setState({genres:event.target.value})
    }

    artistsSelectHandler=(event)=>{
        this.setState({artists:event.target.value})
    }

    movieClickHandler=(movieId)=>{
        ReactDOM.render(<Details movieId={movieId}/>,document.getElementById('root'))
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Header/>
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie=>(
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title}></img>
                            <GridListTileBar title={movie.title}>
                            </GridListTileBar>
                        </GridListTile>
                    ))}
                </GridList>
                <div className={classes.rootMovies}>
                    <GridList cols={4}>
                        {moviesData.map(movie=>(
                            <GridListTile onClick={()=>this.movieClickHandler(movie.id)} key={movie.id} className={classes.gridListTileMovies}>
                                <img src={movie.poster_url} alt={movie.title}></img>
                                <GridListTileBar title={movie.title}
                                subtitle={<span>Release Date: {movie.release_date.slice(0,10)}</span>}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div> 
                <div className='right'>
                    <Card>
                        <CardContent>
                            <FormControl className={classes.formControl}>
                                <Typography className={classes.title} color='textSecondary'>
                                    FIND MOVIES BY:
                                </Typography>
                            </FormControl>
                            <br/>
                            <FormControl className={classes.formControl} >
                                <InputLabel htmlFor='movieName'>Movie Name</InputLabel>
                                <Input id='movieName' onChange={this.onChangeMovieNameHandler}>
                                </Input>
                            </FormControl>
                            <br/>
                            <FormControl className={classes.formControl} >
                                <InputLabel htmlFor='select-multiple-checkbox'>Genre</InputLabel>
                                <Select
                                    multiple
                                    input={<Input id='select-multiple-checkbox'></Input>}
                                    renderValue={selected=>selected.join(',')}
                                    value={this.state.genres}
                                    onChange={this.genreSelectHandler}>
                                    <MenuItem value="0">None</MenuItem>
                                    {
                                        genres.map((genre)=>{
                                            return(
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name)>-1}/>
                                                <ListItemText primary={genre.name}></ListItemText>
                                            </MenuItem>
                                            )
                                        })
                                    }   
                                </Select>
                            </FormControl>
                            <br/>
                            <FormControl className={classes.formControl} >
                                <InputLabel htmlFor='select-multiple-checkbox'>Artists</InputLabel>
                                <Select
                                    multiple
                                    input={<Input id='select-multiple-checkbox'></Input>}
                                    renderValue={selected=>selected.join(',')}
                                    value={this.state.artists}
                                    onChange={this.artistsSelectHandler}>
                                    <MenuItem value="0">None</MenuItem>
                                    {
                                        artists.map((artist)=>{
                                            return(
                                            <MenuItem key={artist.id} value={artist.first_name+' '+artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name+' '+artist.last_name)>-1}/>
                                                <ListItemText primary={artist.first_name+' '+artist.last_name}></ListItemText>
                                            </MenuItem>
                                            )
                                        })
                                    }   
                                </Select>
                            </FormControl>
                            <br/>
                            <FormControl className={classes.formControl}>
                                    <TextField id='releaseDateStart'
                                    label='Release Date Start'
                                    type='date'
                                    defaultValue=''
                                    InputLabelProps={{shrink:true}}
                                    />
                            </FormControl>
                            <br/>
                            <FormControl className={classes.formControl}>
                                    <TextField id='releaseDateEnd'
                                    label='Release Date End'
                                    type='date'
                                    defaultValue=''
                                    InputLabelProps={{shrink:true}}
                                    />
                            </FormControl>
                            <br/>
                            <Button variant='contained' color='primary' onClick={this.registerClickHandler}>Apply</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home)