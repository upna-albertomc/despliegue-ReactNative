import { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { ACTIVIDADES } from '../comun/actividades';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { List, Divider } from 'react-native-paper';


function Historia() {
    return (
        <Card style={styles.card}>
            <Card.Title
                title="Un Poquito de Historia"
                titleStyle={styles.titulo}
                style={styles.cardTitle}
            />
                <Card.Content>
                    <Text style={styles.descripcion}>
                        {textoHistoria}
                      </Text>
                </Card.Content>
            </Card>
        
    );
}

class QuienesSomos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actividades: ACTIVIDADES,
    };
  }


  render() {
  
    return (
      <ScrollView>
        <Historia key="-"/>
        
        <Card>
          <Card.Title
            title={tituloActividades}
            titleStyle={styles.titulo}
            style={styles.cardTitle}
          />
            <Card.Content>
              {this.state.actividades.map((item) => (
                <View>
                  <List.Item
                    key={item.id}
                    title={item.nombre}
                    description={item.descripcion}
                    titleNumberOfLines={0}
                    descriptionNumberOfLines={6}
                    left={(props, item) => (
                      <Image
                        
                        source={require("./imagenes/bisaurin.png")}

                        style={[props.style, styles.imagen]}
                        resizeMode="cover"
                      />
                    )}
                    titleStyle={styles.titulo}
                    descriptionStyle={styles.descripcion}
                    contentStyle={styles.contenido}
                  />
                  <Divider />
                </View>
              ))}
            </Card.Content>
          </Card>
      </ScrollView>    
    );
  }
}
const tituloActividades = "\"Actividades y Recursos\""
const textoHistoria = "El nacimiento del club de montaña Gaztaroa se remonta a la" +
                        "primavera de 1976 cuando jóvenes aficionados a la montaña y" +
                        "pertenecientes a un club juvenil decidieron crear la sección" +
                        "montañera de dicho club. Fueron unos comienzos duros debido sobre" +
                        "todo a la situación política de entonces. Gracias al esfuerzo" +
                        "económico de sus socios y socias se logró alquilar una bajera." +
                        "Gaztaroa ya tenía su sede social. \n\n" +
                        "Desde aquí queremos hacer llegar nuestro agradecimiento a todos" +
                        "los montañeros y montañeras que alguna vez habéis pasado por el" +
                        "club aportando vuestro granito de arena.\n\n" +
                        "Gracias!";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  card: {
    margin: 8,
  },
  image: {
    marginHorizontal: 0,
  },
  descripcion: {
    marginTop: 20,
    marginBottom: 20,
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  cardTitle: {
    alignItems: 'center',
  },
  contenido: {
    paddingRight: 8,
  },

});

export default QuienesSomos;