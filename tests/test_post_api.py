import os
import unittest
import requests
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()


class TestGetApi(unittest.TestCase):

    def setUp(self):
        # Configurar a URL da API e os dados do usuário
        self.url = 'https://tolvk25ntd.execute-api.us-east-1.amazonaws.com/dev?'
        self.body = {
            'id': '09260970407',
            'userName': 'Lucas',
            'email': 'lucas@example.com',
            'age': 30
        }
        self.api_key = os.getenv('API_KEY')

    def test_post_data_api(self):
        # Enviar solicitação POST com cabeçalho personalizado
        headers = {'x-api-key': self.api_key}
        response = requests.post(self.url, headers=headers, json=self.body)

        # Verificar a resposta da solicitação
        self.assertEqual(
            response.text, '"CPF 09260970407 is already registered!"')


def __init__():
    unittest.main()
