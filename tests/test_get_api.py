import unittest
import requests


class TestGetApi(unittest.TestCase):

    def setUp(self) -> None:
        self.url = 'https://tolvk25ntd.execute-api.us-east-1.amazonaws.com/dev?'

    def test_get_data_api(self):

        response = requests.get(self.url)

        self.assertEqual(response.status_code, 200)

    def test_params_api(self):
        params = ['id', 'userName', 'email', 'age']

        response = requests.get(self.url)

        # Verificar se todos os parâmetros estão presentes na resposta
        for param in params:
            self.assertIn(param, response.text, f'Parâmetro ausente: {param}')


def __init__():
    unittest.main()
