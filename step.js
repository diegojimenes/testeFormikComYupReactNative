import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

export default class step extends Component {
  currentView(myStep) {
    if (this.props.currentStep > myStep) {
      return styles.completed;
    } else if (this.props.currentStep < myStep) {
      return styles.toDo;
    } else if ((this.props.currentStep = myStep)) {
      return styles.current;
    }
  }
  currentText(myStep) {
    if (this.props.currentStep > myStep) {
      return styles.textCompleted;
    } else if (this.props.currentStep < myStep) {
      return styles.textToDo;
    } else if ((this.props.currentStep = myStep)) {
      return styles.textCurrent;
    }
  }
  currentSpace(myStep) {
    if (this.props.currentStep > myStep) {
      return styles.spaceCompleted;
    } else if (this.props.currentStep < myStep) {
      return styles.spaceToDo;
    } else if ((this.props.currentStep = myStep)) {
      return styles.spaceCurrent;
    }
  }
  current(myStep) {
    if (this.props.currentStep > myStep) {
      return "completed";
    } else if (this.props.currentStep < myStep) {
      return "toDo";
    } else if ((this.props.currentStep = myStep)) {
      return "current";
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, this.currentView(1)]}>
          <Text style={[styles.text, this.currentText(1)]}>
            {this.current(1) === "completed" ? "ok" : "1"}
          </Text>
        </View>
        <View style={styles.containerSpace}>
          <Text style={[styles.space, this.currentSpace(1)]}>=></Text>
        </View>
        <View style={[styles.item, this.currentView(2)]}>
          <Text style={[styles.text, this.currentText(2)]}>
            {this.current(2) === "completed" ? "ok" : "2"}
          </Text>
        </View>
        <View style={styles.containerSpace}>
          <Text style={[styles.space, this.currentSpace(2)]}>=></Text>
        </View>
        <View style={[styles.item, this.currentView(3)]}>
          <Text style={[styles.text, this.currentText(3)]}>
            {this.current(3) === "completed" ? "ok" : "3"}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  //   items
  item: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  current: {
    borderWidth: 3,
    borderColor: "green"
  },
  completed: {
    backgroundColor: "green"
  },
  toDo: {
    borderWidth: 3,
    borderColor: "gray"
  },
  //   text
  text: {
    fontSize: 20
  },
  textCurrent: {
    color: "green"
  },
  textCompleted: {
    color: "#fff"
  },
  textToDo: {
    color: "gray"
  },
  //   space
  containerSpace: {
    padding: 10
  },
  space: {
    fontSize: 20
  },
  spaceCurrent: {
    color: "green"
  },
  spaceCompleted: {
    color: "green"
  },
  spaceToDo: {
    color: "gray"
  }
});
