pipeline {
    agent any
     tools {
		nodejs 'NodeJS'
	}	
     environment {
		SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
		SONAR_PROJECT_KEY = 'secure'
        DOCKER_HUB_REPO ='emrehannclk/secure'
        DOCKER_HUB_CRED_ID = 'docker'
   
        
		
	}
   
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
                 git branch: 'main', credentialsId: 'github', url: 'https://github.com/emrehannclkBackup/secure-coding.git'
                echo 'Cloning the project from Github...'
                sh 'ls -la'
              
            }
        }

        stage('Unit Test') {
            steps {
              echo 'Npm is being used'
               sh 'npm test'
               sh 'npm install'
               echo 'Npm is being used'
            }
        }

         stage('SonarQube Analysis'){
			steps {
				withCredentials([string(credentialsId: 'sonar', variable: 'SONAR_TOKEN')]) {


    					
					withSonarQubeEnv('SonarQube') {
								
                        sh """
                        echo 'Starting Sonar Scanner...'
                        echo 'Starting Sonar Scanner...'
                        echo 'Starting Sonar Scanner...'
                        echo 'Starting Sonar Scanner...'
                        echo 'SONAR_SCANNER_HOME: ${SONAR_SCANNER_HOME}'
                        echo 'SONAR_PROJECT_KEY: ${SONAR_PROJECT_KEY}'
                        echo 'SONAR_TOKEN: ${SONAR_TOKEN}'
                        echo 'SonarQube URL: http://sonarqube:9000'

                        ${SONAR_SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://sonarqube:9000 \
                        -Dsonar.login=${SONAR_TOKEN}

                       echo 'Sonar Scanner finished.'"""

					}
				}
			}
		}

         stage('Docker Image'){
			steps {

                echo 'Building Docker İmage'
				script {
					dockerImage = docker.build("${DOCKER_HUB_REPO}:latest")
				}
			}
		}
		stage('Trivy Scan'){
			steps {
				 echo 'trivy is scanning'	
                 sh 'trivy --severity HIGH,CRITICAL --no-progress --format table -o trivy-cicd-01-report.html image ${DOCKER_HUB_REPO}:latest'
			}
		}


        stage('Push Image to DockerHub') {
            steps {
                  echo 'Pushing Docker image to DockerHub'
                script {
                
                    docker.withRegistry('https://registry.hub.docker.com', "${DOCKER_HUB_CRED_ID}") {
                        dockerImage.push("latest")
                    }
                }
            }
        }



    }
}
