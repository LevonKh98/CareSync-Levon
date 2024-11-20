package application;

import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class Controller {
	
	
	
	@FXML
	Label errorPrompt;
	@FXML
	TextField nameTextField;
	@FXML
	PasswordField PasswordLogin;

	private Stage stage;
	private Scene scene;
	private Parent root;
	private String userName = null;
	private String Password = null;
	
	public void login(ActionEvent event) throws IOException {
		

			userName = "doc.rodriguez@gmail.com";
			Password = "Caresync21";



		
		if ((nameTextField.getText().equals("doc.rodriguez@gmail.com")) && PasswordLogin.getText().equals("Caresync21")){
			FXMLLoader loader = new FXMLLoader(getClass().getResource("Home.fxml"));
			root = loader.load();
			 
			
			stage = (Stage)((Node)event.getSource()).getScene().getWindow();
			scene = new Scene(root);
			scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
			stage.setScene(scene);
			stage.show();
			
		}
		else if (!PasswordLogin.getText().equals(Password)) {
			errorPrompt.setText("Incorrect Email/Password");	
		}
		
	}
	
	public void logout(ActionEvent event) throws IOException {
		

	
		FXMLLoader loader = new FXMLLoader(getClass().getResource("Main.fxml"));
		root = loader.load();
		 
		
		stage = (Stage)((Node)event.getSource()).getScene().getWindow();
		scene = new Scene(root);
		scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
		stage.setScene(scene);
		stage.show();
		
	
	
}

	public void LookUP(ActionEvent event) throws IOException {
		

		
		FXMLLoader loader = new FXMLLoader(getClass().getResource("LookUp.fxml"));
		root = loader.load();
		 
		
		stage = (Stage)((Node)event.getSource()).getScene().getWindow();
		scene = new Scene(root);
		scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
		stage.setScene(scene);
		stage.show();
		
	
	
}
	
}