import { YMaps, Map } from 'react-yandex-maps';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  map: {
    width: '100%',
    height: '380px',
  },
}));

const CustomMap = () => {
  const classes = useStyles();

  return (
    <YMaps>
      <div>
        <Map
          className={classes.map}
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        />
      </div>
    </YMaps>
  );
};

export default CustomMap;
