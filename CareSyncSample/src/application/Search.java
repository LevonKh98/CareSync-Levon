package application;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.ResourceBundle;
import java.util.stream.Collectors;



public class Search implements Initializable {
	private Stage stage;
	private Scene scene;
	private Parent root;
	

    ArrayList<String> words = new ArrayList<>(
            Arrays.asList(
            	    "John Doe", 
            	    "Jane Smith",
            	    "Sam Human",
            	    "Emily Day",
            	    "Brian Best",
            	    "Alice Friend",
            	    "Charles Animal",
            	    "David Human",
            	    "Eve Bear",
            	    "Sophia Life",
            	    "Chris Wordsworth",
            	    "Emma Text",
            	    "Alex Bird",
            	    "Olivia Dog",
            	    "Mark Few",
            	    "Linda Samantha",
            	    "Ella Like", 
            	    "Mike Hunt",
            	    "Hugh Jazz")
    );

    @FXML
    private TextField searchBar;

    @FXML
    private ListView<String> listView;

    @FXML
    void search(ActionEvent event) {
        listView.getItems().clear();
        listView.getItems().addAll(searchList(searchBar.getText(),words));
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        listView.getItems().addAll(words);
    }

    private List<String> searchList(String searchWords, List<String> listOfStrings) {

        List<String> searchWordsArray = Arrays.asList(searchWords.trim().split(" "));

        return listOfStrings.stream().filter(input -> {
            return searchWordsArray.stream().allMatch(word ->
                    input.toLowerCase().contains(word.toLowerCase()));
        }).collect(Collectors.toList());
    }
	
    public void Back(ActionEvent event) throws IOException {
		

		
		FXMLLoader loader = new FXMLLoader(getClass().getResource("Home.fxml"));
		root = loader.load();
		 
		
		stage = (Stage)((Node)event.getSource()).getScene().getWindow();
		scene = new Scene(root);
		scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
		stage.setScene(scene);
		stage.show();
		
	
	
}
}
