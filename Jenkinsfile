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
               
                echo 'Cloning the project from Github...'
              
            }
        }

        stage('Unit Test') {
            steps {
               echo 'Npm is being used'
               echo 'Running unit tests...'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Sonar scanning is starting'
            }
        }

        stage('Docker Image') {
            steps {
                echo 'Building Docker Image'
               
            }
        }

        stage('Trivy Scan') {
            steps {
                echo 'Trivy is scanning'
               
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                echo 'Pushing Docker image to DockerHub'
              
            }
        }
    }
}
