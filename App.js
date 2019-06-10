import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Dimensions,
  ScrollView
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Step from "./step";

var { height } = Dimensions.get("window");

const pessoal = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  sobrenome: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const empresa = Yup.object().shape({
  company: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  fone: Yup.number().required("Required")
});

const banco = Yup.object().shape({
  conta: Yup.number().required("Required"),
  agencia: Yup.number().required("Required")
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }
  render() {
    return (
      <View style={styles.container} style={styles.container}>
        <Step currentStep={this.state.currentStep} />
        {this.state.currentStep === 1 && (
          <ScrollView style={styles.form}>
            <Formik
              validationSchema={pessoal}
              initialValues={{
                nome: "",
                sobrenome: "",
                email: ""
              }}
              onSubmit={values => {
                console.log(values);
                this.setState({
                  currentStep:
                    this.state.currentStep < 5 ? this.state.currentStep + 1 : 1
                });
                this._company.focus();
              }}
            >
              {props => (
                <View>
                  <TextInput
                    keyboardType={"default"}
                    returnKeyType={"next"}
                    ref={component => (this._name = component)}
                    onSubmitEditing={() => this._lastname.focus()}
                    placeholder={"nome"}
                    onChangeText={e => props.handleChange("nome")(e)}
                    onBlur={props.handleBlur("nome")}
                    value={props.values.nome}
                  />
                  {props.errors.nome && props.touched.nome ? (
                    <View>
                      <Text>{props.errors.nome}</Text>
                    </View>
                  ) : null}
                  <TextInput
                    keyboardType={"default"}
                    returnKeyType={"next"}
                    ref={component => (this._lastname = component)}
                    onSubmitEditing={() => this._email.focus()}
                    placeholder={"sobrenome"}
                    onChangeText={props.handleChange("sobrenome")}
                    onBlur={props.handleBlur("sobrenome")}
                    value={props.values.sobrenome}
                  />
                  {props.errors.sobrenome && props.touched.sobrenome ? (
                    <View>
                      <Text>{props.errors.sobrenome}</Text>
                    </View>
                  ) : null}
                  <TextInput
                    keyboardType={"email-address"}
                    returnKeyType={"done"}
                    ref={component => (this._email = component)}
                    onSubmitEditing={props.handleSubmit}
                    placeholder={"email"}
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                    value={props.values.email}
                  />
                  {props.errors.email && props.touched.email ? (
                    <View>
                      <Text>{props.errors.email}</Text>
                    </View>
                  ) : null}
                  <Button onPress={props.handleSubmit} title="Proximo" />
                </View>
              )}
            </Formik>
          </ScrollView>
        )}
        {this.state.currentStep === 2 && (
          <ScrollView style={styles.form}>
            <Formik
              validationSchema={empresa}
              initialValues={{
                company: "",
                fone: null
              }}
              onSubmit={values => {
                console.log(values);
                this.setState({
                  currentStep:
                    this.state.currentStep < 5 ? this.state.currentStep + 1 : 1
                });
                this._conta.focus();
              }}
            >
              {props => (
                <View>
                  <TextInput
                    keyboardType={"default"}
                    returnKeyType={"next"}
                    ref={component => (this._company = component)}
                    onSubmitEditing={() => this._fone.focus()}
                    placeholder={"company"}
                    onChangeText={e => props.handleChange("company")(e)}
                    onBlur={props.handleBlur("company")}
                    value={props.values.company}
                  />
                  {props.errors.company && props.touched.company ? (
                    <View>
                      <Text>{props.errors.company}</Text>
                    </View>
                  ) : null}
                  <TextInput
                    keyboardType={"phone-pad"}
                    returnKeyType={"done"}
                    ref={component => (this._fone = component)}
                    onSubmitEditing={props.handleSubmit}
                    placeholder={"fone"}
                    onChangeText={props.handleChange("fone")}
                    onBlur={props.handleBlur("fone")}
                    value={props.values.fone}
                  />
                  {props.errors.fone && props.touched.fone ? (
                    <View>
                      <Text>{props.errors.fone}</Text>
                    </View>
                  ) : null}
                  <Button onPress={props.handleSubmit} title="Proximo" />
                </View>
              )}
            </Formik>
          </ScrollView>
        )}
        {this.state.currentStep === 3 && (
          <ScrollView style={styles.form}>
            <Formik
              validationSchema={banco}
              initialValues={{
                conta: null,
                agencia: null
              }}
              onSubmit={values => {
                console.log(values);
                this.setState({
                  currentStep:
                    this.state.currentStep < 5 ? this.state.currentStep + 1 : 1
                });
              }}
            >
              {props => (
                <View>
                  <TextInput
                    keyboardType={"numeric"}
                    returnKeyType={"next"}
                    ref={component => (this._conta = component)}
                    onSubmitEditing={() => this._agencia.focus()}
                    placeholder={"conta"}
                    onChangeText={e => props.handleChange("conta")(e)}
                    onBlur={props.handleBlur("conta")}
                    value={props.values.conta}
                  />
                  {props.errors.conta && props.touched.conta ? (
                    <View>
                      <Text>{props.errors.conta}</Text>
                    </View>
                  ) : null}
                  <TextInput
                    keyboardType={"numeric"}
                    returnKeyType={"done"}
                    ref={component => (this._agencia = component)}
                    onSubmitEditing={props.handleSubmit}
                    placeholder={"agencia"}
                    onChangeText={props.handleChange("agencia")}
                    onBlur={props.handleBlur("agencia")}
                    value={props.values.agencia}
                  />
                  {props.errors.agencia && props.touched.agencia ? (
                    <View>
                      <Text>{props.errors.agencia}</Text>
                    </View>
                  ) : null}
                  <Button onPress={props.handleSubmit} title="Concluir" />
                </View>
              )}
            </Formik>
          </ScrollView>
        )}
        {this.state.currentStep > 3 && (
          <ScrollView>
            <Text
              style={{
                fontSize: 30,
                color: "#fff",
                alignSelf: "center",
                fontWeight: "bold"
              }}
            >
              Completed
            </Text>
            <Button
              onPress={() => {
                this.setState({
                  currentStep: 1
                });
              }}
              title="Restart"
            />
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A7FFEB",
    height: height,
    justifyContent: "center",
    alignContent: "center"
  },
  form: {
    padding: 30,
    backgroundColor: "#fff"
  }
});
