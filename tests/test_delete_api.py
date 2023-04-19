import os
import unittest
import requests
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()


class TestDeleteApi(unittest.TestCase):

    def setUp(self):
        # Configurar a URL da API e os dados do usuário
        self.url = 'https://tolvk25ntd.execute-api.us-east-1.amazonaws.com/dev?id=09260970407'
        self.headers = {'x-api-key': os.getenv('API_KEY')}

    def test_delete_id_invalid(self):
        response = requests.delete(self.url.replace(
            '09', ''), headers=self.headers)
        self.assertEqual(response.text, '"CPF 2670407 invalid!"')


def __init__():
    unittest.main()
