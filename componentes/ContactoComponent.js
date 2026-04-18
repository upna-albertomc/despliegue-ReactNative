import { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

function ContactoComponent() {
    return (
        <Card style={styles.card}>
            <Card.Title
                title="Información de contacto"
                titleStyle={styles.titulo}
                style={styles.cardTitle}
            />
                <Card.Content>
                    <Text style={styles.descripcion}>
                        {textoDescripcion}
                      </Text>
                </Card.Content>
            </Card>
        
    );
}

class Contacto extends Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <ContactoComponent />
    );
  }
}

const textoDescripcion = "Kaixo Mendizale!" +
"Si quieres participar en las salidas de montaña que organizamos o" +
"quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a" +
"través de diferentes medios. Puedes llamarnos por teléfono los jueves" +
"de las semanas que hay salida (de 20:00 a 21:00). También puedes" +
"ponerte en contacto con nosotros escribiendo un correo electrónico, o" +
"utilizando la aplicación de esta página web. Y además puedes" +
"seguirnos en Facebook. \n\n" +
"Para lo que quieras, estamos a tu disposición! \n\n" +
"Tel: +34 948 277151 \n\n" + 
"Email: gaztaroa@gaztaroa.com \n\n"

const styles = StyleSheet.create({
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
});



export default Contacto;