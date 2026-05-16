import { Component } from 'react';
import { ScrollView, View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { EXCURSIONES } from '../comun/excursiones';
import { CABECERAS } from '../comun/cabeceras';
import { ACTIVIDADES } from '../comun/actividades';
import { baseUrl } from '../comun/comun.js'
import { IndicadorActividad } from './IndicadorActividadComponent.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    excursiones: state.excursiones
  }
}

function RenderItem(props) {
  const item = props.item;

  if (props.isLoading) {
    return(
      <IndicadorActividad />
    );
  }


  else if (props.errMess) {
    return(
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  }

  else {
    return (
      <Card style={styles.card}>
        <Card.Title
          title={item.nombre}
          titleStyle={styles.titulo}
          style={styles.cardTitle}
        />
        <ImageBackground
          source={{uri: baseUrl + item.imagen}}
          style={styles.image}
        >
          <Text style={styles.imageText}>
            {item.nombre}
          </Text>
        </ImageBackground>
        <Card.Content>
          <Text style={styles.descripcion}>
            {item.descripcion}
          </Text>
        </Card.Content>
      </Card>
    );
  }
}

class Home extends Component {

  render() {
    return (
      <ScrollView>
        <RenderItem item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]} 
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
          />
        <RenderItem item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]} 
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
          />
        <RenderItem item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]} 
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
  },
  image: {
    marginHorizontal: 0,
    height: 200,
  },
  descripcion: {
    marginTop: 20,
    marginBottom: 20,
  },
  titulo: {
    textAlign: 'center',
  },
  cardTitle: {
    alignItems: 'center',
  },
  imageText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default connect(mapStateToProps)(Home);