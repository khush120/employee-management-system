pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'frontend',
                    url: 'https://github.com/khush120/employee-management-system.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'No tests configured'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Application Ready for Deployment'
            }
        }
    }
}