<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
 
const JWT_SECRET = "makey1234567";
$jwt="";

$app = AppFactory::create();

function  addHeaders (Response $response) : Response {
    $response = $response
    ->withHeader("Content-Type", "application/json")
    ->withHeader('Access-Control-Allow-Origin', '*')
    ->withHeader('Access-Control-Allow-Headers', 'Content-Type,  Authorization')
    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    ->withHeader('Access-Control-Expose-Headers', 'Authorization');

    return $response;
}

function createJwT (Response $response) : Response {

    $issuedAt = time();
    $expirationTime = $issuedAt + 60;
    $payload = array(
        'userid' => 'toto',
        'email' => 'titi@gmail.com',
        'pseudo' => 'titiPseudo',
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );

    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    $GLOBALS['jwt'] = $token_jwt;
    return $response;
}

$app->options('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $response = $response->withHeader("Access-Control-Max-Age", 600); 
    return addHeaders ($response);
});

$app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["nom"] = $args ['name'];
    $response->getBody()->write(json_encode ($array));
    return addHeaders($response);
});

$app->options('/api/user', function (Request $request, Response $response, $args) {
    $response = $response->withHeader("Access-Control-Max-Age", 600);
    return addHeaders ($response);
});

$app->get('/api/user', function (Request $request, Response $response, $args) {   
    $data = array('nom' => 'toto', 'prenom' => 'titi','adresse' => '6 rue des fleurs', 'tel' => '0606060607');
    $response->getBody()->write(json_encode($data));
    return addHeaders($response);
});

$app->options('/api/login', function (Request $request, Response $response, $args) {
    $response = $response->withHeader("Access-Control-Max-Age", 600); 
    return addHeaders($response);
});

// APi d'authentification générant un JWT
$app->post('/api/login', function (Request $request, Response $response, $args) {   
    $err=false;
    $body = $request->getParsedBody();
    $login = $body ['login'] ?? "";
    $pass = $body ['pass'] ?? "";

    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$login))   {
        $err = true;
    }
    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$pass))  {
        $err=true;
    }

    if (!$err) {
            $response = createJwT($response);
            $data = array('nom' => 'toto', 'prenom' => 'titi','jwt'=>$GLOBALS['jwt']);
            $response->getBody()->write(json_encode($data));
     } else {          
            $response = $response->withStatus(401);
     }
    return addHeaders($response);
});

$app->options('/api/catalogue', function (Request $request, Response $response, $args) {
    $response = $response->withHeader("Access-Control-Max-Age", 600); 
    return addHeaders($response);
});

$app->get('/api/catalogue/{filtre}', function (Request $request, Response $response, $args) {
    $filtre = $args['filtre'];
    $flux = '[
  {
    "name": "Pommes",
    "price": 2.49,
    "description": "Des pommes fraîches et juteuses, parfaites pour une collation saine ou pour la préparation de délicieuses tartes et compotes."
  },
  {
    "name": "Oranges",
    "price": 1.99,
    "description": "Des oranges savoureuses et riches en vitamines, idéales pour préparer des jus frais ou pour une collation saine."
  },
  {
    "name": "Bananes",
    "price": 1.79,
    "description": "Des bananes mûres et sucrées, parfaites pour une collation rapide ou pour ajouter une touche sucrée à vos smoothies et à vos céréales."
  },
  {
    "name": "Salade",
    "price": 3.99,
    "description": "Un mélange de salades fraîches et croquantes, idéal pour préparer des salades saines et délicieuses pour vos repas."
  },
  {
    "name": "Tomates",
    "price": 2.49,
    "description": "Des tomates rouges et juteuses, parfaites pour ajouter de la saveur et de la texture à vos plats préférés, des sandwichs aux pâtes."
  },
  {
    "name": "Viande",
    "price": 15.99,
    "description": "De la viande fraîche et de qualité, provenant des meilleurs producteurs locaux, pour des plats copieux et savoureux."
  },
  {
    "name": "Lait",
    "price": 8.49,
    "description": "Du lait frais et crémeux, parfait pour le petit déjeuner ou pour ajouter une touche de douceur à vos recettes préférées."
  },
  {
    "name": "Oeuf",
    "price": 5.49,
    "description": "Des oeufs frais et riches en protéines, idéaux pour les petits déjeuners, les omelettes ou pour ajouter de la texture à vos plats préférés."
  },
  {
    "name": "Poisson",
    "price": 14.99,
    "description": "Du poisson frais et savoureux, provenant de sources durables et pêché localement, pour des repas sains et délicieux."
  },
  {
    "name": "Céréales",
    "price": 3.99,
    "description": "Des céréales savoureuses et croquantes, parfaites pour un petit déjeuner rapide ou pour ajouter de la texture à vos yaourts et smoothies."
  }
]';
   
    if ($filtre) {
      $data = json_decode($flux, true); 
    	
        $res = array_filter($data, function($obj) use ($filtre)
        { 
            return strpos($obj["name"], $filtre) !== false;
        });
        $response->getBody()->write(json_encode(array_values($res)));
    } else {
         $response->getBody()->write($flux);
    }
    return addHeaders($response);
});

$app->get('/api/catalogue', function (Request $request, Response $response, $args) {
    $flux = '[
  {
    "name": "Pommes",
    "price": 2.49,
    "description": "Des pommes fraîches et juteuses, parfaites pour une collation saine ou pour la préparation de délicieuses tartes et compotes."
  },
  {
    "name": "Oranges",
    "price": 1.99,
    "description": "Des oranges savoureuses et riches en vitamines, idéales pour préparer des jus frais ou pour une collation saine."
  },
  {
    "name": "Bananes",
    "price": 1.79,
    "description": "Des bananes mûres et sucrées, parfaites pour une collation rapide ou pour ajouter une touche sucrée à vos smoothies et à vos céréales."
  },
  {
    "name": "Salade",
    "price": 3.99,
    "description": "Un mélange de salades fraîches et croquantes, idéal pour préparer des salades saines et délicieuses pour vos repas."
  },
  {
    "name": "Tomates",
    "price": 2.49,
    "description": "Des tomates rouges et juteuses, parfaites pour ajouter de la saveur et de la texture à vos plats préférés, des sandwichs aux pâtes."
  },
  {
    "name": "Viande",
    "price": 15.99,
    "description": "De la viande fraîche et de qualité, provenant des meilleurs producteurs locaux, pour des plats copieux et savoureux."
  },
  {
    "name": "Lait",
    "price": 8.49,
    "description": "Du lait frais et crémeux, parfait pour le petit déjeuner ou pour ajouter une touche de douceur à vos recettes préférées."
  },
  {
    "name": "Oeuf",
    "price": 5.49,
    "description": "Des oeufs frais et riches en protéines, idéaux pour les petits déjeuners, les omelettes ou pour ajouter de la texture à vos plats préférés."
  },
  {
    "name": "Poisson",
    "price": 14.99,
    "description": "Du poisson frais et savoureux, provenant de sources durables et pêché localement, pour des repas sains et délicieux."
  },
  {
    "name": "Céréales",
    "price": 3.99,
    "description": "Des céréales savoureuses et croquantes, parfaites pour un petit déjeuner rapide ou pour ajouter de la texture à vos yaourts et smoothies."
  }
]'; 
    $response->getBody()->write($flux);

    return addHeaders($response);
});

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello","/api/login"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run ();