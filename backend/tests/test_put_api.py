import os
import unittest
import requests
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()


class TestGetApi(unittest.TestCase):

    def setUp(self):
        # Configurar a URL da API e os dados do usuário
        self.url = 'https://tolvk25ntd.execute-api.us-east-1.amazonaws.com/dev?id=09260970407'
        self.body = {
            'userName': 'Lucas',
            'email': 'test@gmail.com',
            'age': 30
        }
        self.headers = {'x-api-key': os.getenv('API_KEY')}

    def test_put_data_api(self):
        # Enviar solicitação PUT com cabeçalho personalizado
        response = requests.put(self.url, headers=self.headers, json=self.body)

        # Verificar a resposta da solicitação
        self.assertEqual(response.text, '"User updated"')

    def test_put_id_invalid_api(self):

        response = requests.put(self.url.replace(
            '09', ''), headers=self.headers, json=self.body)

        self.assertEqual(response.text, '"CPF 2670407 invalid!"')


def __init__():
    unittest.main()
