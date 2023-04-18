import unittest
import requests


class TestGetApi(unittest.TestCase):

    def setUp(self) -> None:
        self.url = 'https://tolvk25ntd.execute-api.us-east-1.amazonaws.com/dev?'

    def test_get_data_api(self):

        response = requests.get(self.url)

        self.assertEqual(response.status_code, 200)


def __init__():
    unittest.main()
