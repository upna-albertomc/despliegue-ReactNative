import { Component, useState } from 'react';
import { View, StyleSheet, ImageBackground, Modal, Button } from 'react-native';
import { Card, Text, Title, TextInput, } from 'react-native-paper';
import { ScrollView, FlatList} from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import { baseUrl, colorGaztaroaOscuro, colorGaztaroaClaro } from '../comun/comun.js'
import { connect } from 'react-redux';
import { postFavorito, postComentario } from '../redux/ActionCreators.js';

const mapStateToProps = (state) => {
  return {
    excursiones: state.excursiones,
    favoritos: state.favoritos,
    comentarios: state.comentarios,
  }
}

const mapDispatchToProps = dispatch => ({
  postFavorito: (excursionId) => dispatch(postFavorito(excursionId)),
  postComentario: (comentario) => dispatch(postComentario(comentario)),
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

function Estrella(props){
  return(
    <IconButton
      icon={props.posicionEstrella>props.puntuacionActual ? "star-outline" : "star"}
      size={28}
      onPress={() => {
        props.setPuntuacion(props.posicionEstrella)
      }} 
    />
  )
}

function RenderExcursion(props) {

  const excursion = props.excursion;

  const [modalVisible, setModalVisible] = useState(false);
  const [puntuacion, setPuntuacion] = useState(5);
  const puntuaciones = [1,2,3,4,5]

  const [autor, onChangeAutor] = useState('');
  const [comentario, onChangeComentario] = useState('');

  const toggleModal = () =>{
    setPuntuacion(5);
    onChangeAutor("");
    onChangeComentario("");
    setModalVisible(!modalVisible);
  }
  
  const gestionarComentario = () => {
    props.postComentario({
      "excursionId": props.excursionId,
      "valoracion": puntuacion,
      "comentario": comentario,
      "autor": autor
    })
    toggleModal()
  }

  if (excursion != null) {
    return (
      <>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.card}>
            <View style={styles.iconoContainer}>
              {puntuaciones.map(item => {
                return(
                  <Estrella 
                    posicionEstrella = {item}
                    puntuacionActual = {puntuacion}
                    setPuntuacion = {setPuntuacion}
                  />
                )
              })}
              </View>
              <View>
                <TextInput
                  placeholder="Autor"
                  onChangeText={onChangeAutor}
                  value={autor}
                  left={<TextInput.Icon icon='account' size={28}/>}
                />
                <TextInput
                  placeholder="Comentario"
                  onChangeText={onChangeComentario}
                  value={comentario}
                  left={<TextInput.Icon icon='comment' size={28}/>}
                />
              </View>
              <Divider />
              <View style={styles.botonesContainer}>
                <Button 
                  title="cancelar"
                  onPress={toggleModal}
                />
                <Button 
                  title="Enviar"
                  onPress={gestionarComentario}
                />
              </View>

          </View>
        </Modal>

        <Card style={styles.card}>
            <Card.Title
              title={excursion.nombre}
              titleStyle={styles.titulo}
              style={styles.cardTitle} />
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
                onPress={() => props.favorita ?
                  console.log('La excursión ya se encuentra entre las favoritas') :
                  props.onPress()} />
              <IconButton
                icon='pencil'
                size={28}
                onPress={() => {
                  toggleModal()
                }} 
              />
            </View>

          </Card>
        </>
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
          excursionId={excursionId}
          postComentario={(comentario) =>{this.props.postComentario(comentario)}}
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 8,
  },
  botonesContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 8,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalleExcursion);