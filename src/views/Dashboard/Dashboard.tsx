import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, AutoComplete, Tabs, Collapse, Checkbox, Input } from 'antd';
import { searchMovie } from '../../store/Movie/movieServices';
import {
  addMovieAsUnwatch,
  addMovieAsWatch,
  removeMovieFromWatch,
  searchMyMovie,
} from '../../store/Movie/movieActions';
import { IRootReducerState } from '../../store/IRootReducer';
import { IMovieState } from '../../store/Movie/movieReducer';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { getYear } from '../../common/utilities/commonUtilities';
import './dashboard.scss';

const { TabPane } = Tabs;
const { Panel } = Collapse;

/**
 * Movie DashBoard
 * @constructor
 */
const Dashboard: FC = () => {
  // dispatch redux action
  const dispatch = useDispatch();

  // value state for auto complete
  const [value, setValue] = useState('');

  // getting movie from redux
  const movieState: IMovieState = useSelector((state: IRootReducerState) => state.movieReducer);

  // option for search suggestion
  const options = (movieState?.searchList || []).map((movie) => ({
    label: `${movie.title} (${movie.release_date})`,
    value: movie.id,
  }));

  /**
   * On select any movie
   * @param id
   */
  const onSelect = (id: string) => {
    dispatch(addMovieAsUnwatch(parseInt(id)));
  };

  /**
   * On search movie
   * @param value
   */
  const onSearch = (value: string) => {
    if (value) {
      dispatch(searchMovie(value));
    }
    setValue(value);
  };

  /**
   * On search my movies
   * @param event 
   */
  const onSearchMyMovie = (event) => {
    dispatch(searchMyMovie(event.target.value));
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <AutoComplete
            value={value}
            className="autoComplete"
            options={options}
            onSearch={onSearch}
            onSelect={onSelect}
            placeholder="Search MovieDB"
          />
          <Input
            value={movieState.searchTerm}
            className="searchMyMovie"
            placeholder="Search My movie"
            onChange={onSearchMyMovie}
          />
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <EyeInvisibleOutlined />
                  Unwatched
                </span>
              }
              key="1"
            >
              <Collapse>
                {(movieState?.movieList || [])
                  .filter((movie) => !movie.isWatch)
                  .filter((movie) =>
                    movie.title
                      .toLocaleLowerCase()
                      .includes(movieState.searchTerm.toLocaleLowerCase())
                  )
                  .map((movie) => (
                    <Panel header={movie.title} key={`unwatch_${movie.id}`}>
                      <p>Year: {getYear(movie.release_date)}</p>
                      <p>Runtime: {`${movie.vote_count} m`}</p>
                      <p>IMDB Score: {movie.vote_average}</p>
                      <Checkbox
                        checked={movie.isWatch}
                        onChange={() => dispatch(addMovieAsWatch(movie.id))}
                      >
                        Watched
                      </Checkbox>
                    </Panel>
                  ))}
              </Collapse>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <EyeOutlined />
                  Watched
                </span>
              }
              key="2"
            >
              <Collapse>
                {(movieState?.movieList || [])
                  .filter((movie) => movie.isWatch)
                  .filter((movie) =>
                    movie.title
                      .toLocaleLowerCase()
                      .includes(movieState.searchTerm.toLocaleLowerCase())
                  )
                  .map((movie) => (
                    <Panel header={movie.title} key={`watch_${movie.id}`}>
                      <p>Year: {getYear(movie.release_date)}</p>
                      <p>Runtime: {`${movie.vote_count} m`}</p>
                      <p>IMDB Score: {movie.vote_average}</p>
                      <Checkbox
                        checked={movie.isWatch}
                        onChange={() => dispatch(removeMovieFromWatch(movie.id))}
                      >
                        Watched
                      </Checkbox>
                    </Panel>
                  ))}
              </Collapse>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
