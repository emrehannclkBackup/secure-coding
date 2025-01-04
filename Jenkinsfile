pipeline {
    agent any
     tools {
		nodejs 'NodeJS'
	}	

    environment {
		SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
		SONAR_PROJECT_KEY = 'secure'
        DOCKER_HUB_REPO ='emrehannclk/secure'
        DOCKER_HOST = 'tcp://host.docker.internal:2375'
       
        
		
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
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/emrehannclkBackup/secure-coding.git'
                echo 'Cloning the project from Github...'
                sh 'ls -la'
            }
        }

        stage('npm') {
            steps {
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
			}
		}
	
	}
       
    }


