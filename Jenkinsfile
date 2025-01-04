pipeline {
    agent any
   
    stages {


        stage('List Files') {
            steps {
                script {
                    sh 'ls -la'
                }
            }
        }
        stage('Github') {
            steps {
              
            }
        }

        stage('Unit Test') {
            steps {
               echo 'Npm is being used'
           
               echo 'Npm is being used'

               }
        }

        stage('SonarQube Analysis'){
			steps {
				  echo 'Sonar scanning is starting'
			}
		}

        stage('Docker Image'){
			steps {

                echo 'Building Docker İmage'
				
			}
		}
		stage('Trivy Scan'){
			steps {
				 echo 'trivy is scanning'	
                
			}
		}
        stage('Push Image to DockerHub') {
            steps {
                  echo 'Pushing Docker image to DockerHub'
               
            }
        }
	
	}
       
    }


