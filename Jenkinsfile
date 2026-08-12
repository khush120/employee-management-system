pipeline {
    agent any

    tools {
        jdk 'JDK-21'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                dir('employee-api') {
                    bat 'mvn clean compile'
                }
            }
        }

        stage('Test') {
            steps {
                dir('employee-api') {
                    bat 'mvn test'
                }
            }
        }

        stage('Package') {
            steps {
                dir('employee-api') {
                    bat 'mvn package'
                }
            }
        }
    }

    post {
        success {
            echo 'Employee API CI Pipeline completed successfully!'
        }
        failure {
            echo 'Employee API CI Pipeline failed!'
        }
    }
}