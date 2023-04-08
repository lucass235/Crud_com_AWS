import json
import boto3
from json import dumps
import dynamo.dynamoDB as dynamo
import validation.validate_data as validate
import err.custom_err as custom_err


def lambda_handler(event, context):

    try:

        # Verificações das solicitações
        if event['httpMethod'] == 'POST':

            # Decodifica o corpo da solicitação HTTP em um objeto Python
            payload = json.loads(event['body'])

            validate.validate_data(payload)

            result = dynamo.post_item(payload)

            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }

        elif event['httpMethod'] == 'PUT':

            # Extrai o valor do parâmetro 'userName'
            id_user = event['queryStringParameters']['userName']

            data = json.loads(event['body'])

            result = dynamo.update_item(id_user, data)

            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }

        elif event['httpMethod'] == 'DELETE':

            id_user = event['queryStringParameters']['userName']

            result = dynamo.delete_user(id_user)

            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }

        # Caso de a solicitação ser
        items = dynamo.get_data()

        return {
            'statusCode': 200,
            'body': json.dumps(items)
        }

    except custom_err.RequiredErr as err:
        return {
            'statusCode': 407,
            'body': dumps(F'{err}')
        }

    except custom_err.ConflictErr as err:
        return {
            'statusCode': 409,
            'body': json.dumps(f'{err}')
        }

    except custom_err.NotFoundErr as err:
        return {
            'statusCode': 404,
            'body': json.dumps(f'{err}')
        }

    except Exception as err:
        return {
            'statusCode': 505,
            'body': json.dumps(f'{err}')
        }
