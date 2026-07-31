pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                git branch: 'frontend',
                    url: 'https://github.com/khush120/employee-management-system.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Build Successful'
            }
        }

        stage('Test') {
            steps {
                echo 'Test Successful'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy Successful'
            }
        }
    }
}