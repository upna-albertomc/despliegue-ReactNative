import { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { EXCURSIONES } from '../comun/excursiones';
import { ScrollView, FlatList} from 'react-native';
import { COMENTARIOS } from '../comun/comentarios';
import { Divider, IconButton } from 'react-native-paper';
import { baseUrl, colorGaztaroaOscuro, colorGaztaroaClaro } from '../comun/comun.js'
import { connect } from 'react-redux';
import { postFavorito } from '../redux/ActionCreators.js';

const mapStateToProps = (state) => {
  return {
    excursiones: state.excursiones,
    favoritos: state.favoritos,
    comentarios: state.comentarios,
  }
}

const mapDispatchToProps = dispatch => ({
  postFavorito: (excursionId) => dispatch(postFavorito(excursionId))
})

function RenderComentario(props) {
  const comentarios = props.comentarios;
  return (
    <Card style={styles.card}>
    <Card.Title
          title="Comentarios"
          titleStyle={styles.titulo}
          style={styles.cardTitle}
        />
    <Card.Content/>
      {comentarios.map((item) => (
        <View>
          
          <Text style={styles.commentText}> {item.comentario} </Text>
          <Text style={styles.commentAuthor}> {item.autor + ". " + item.dia} </Text>
          <Text style={styles.commentRating}> {"valoración: " + item.valoracion} </Text>
          <Divider />
        </View>
      ))}

    </Card>
  );
}

function RenderExcursion(props) {
  const excursion = props.excursion;

  if (excursion != null) {
    return (
      <Card style={styles.card}>
        <Card.Title
          title={excursion.nombre}
          titleStyle={styles.titulo}
          style={styles.cardTitle}
        />
        <ImageBackground
          source={{ uri: baseUrl + excursion.imagen }}
          style={styles.image}
        >
          <Text style={styles.imageText}>
            {excursion.nombre}
          </Text>
        </ImageBackground>
        <Card.Content>
          <Text style={styles.descripcion}>
            {excursion.descripcion}
          </Text>
        </Card.Content>

        <View style={styles.iconoContainer}>
          <IconButton
            icon={props.favorita ? 'heart' : 'heart-outline'}
            size={28}
            onPress={() =>
              props.favorita ?
              console.log('La excursión ya se encuentra entre las favoritas') :
              props.onPress()
            }
          />
        </View>

      </Card>
    );
  } else {
    return <View />;
  }
}

class DetalleExcursion extends Component {

  marcarFavorito(excursionId) {
    this.props.postFavorito(excursionId);
  }

  render(){    
    const {excursionId} = this.props.route.params;
    return(
      <ScrollView>
        <RenderExcursion
          excursion={this.props.excursiones.excursiones[+excursionId]}
          favorita={this.props.favoritos.favoritos.some(el => el === excursionId)}
          onPress={() => this.marcarFavorito(excursionId)}
        />
        <RenderComentario
          comentarios={this.props.comentarios.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
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
  commentText: {
    fontSize: 15,
  },
  commentAuthor: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  commentRating: {
    fontSize: 10,
  },
  iconoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalleExcursion);