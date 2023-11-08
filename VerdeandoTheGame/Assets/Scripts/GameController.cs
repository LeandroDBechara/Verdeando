using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using UnityEngine.UIElements;

public class GameController : MonoBehaviour
{
    //Variables numericas
    public float dinero;
    public float ecoPoint;
    public GameSO gameSO;


    public static GameController Instance;

    private void Awake()
    {
        // start of new code
        if (Instance != null)
        {
            Destroy(gameObject);
            return;
        }
        // end of new code

        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    // Start is called before the first frame update
    void Start()
    {
        LoadData();

    }

    // Update is called once per frame
    void Update()
    {

    }


    private void OnDestroy()
    {
        dinero = gameSO.dinero;
        ecoPoint = gameSO.ecoPoint;
        Savedata();
    }

    private void Savedata()
    {
        PlayerPrefs.GetFloat("dinero", dinero);
        PlayerPrefs.GetFloat("ecoPoint", ecoPoint);
        
    }
    private void LoadData()
    {
        dinero = PlayerPrefs.GetFloat("dinero",dinero);
        ecoPoint = PlayerPrefs.GetFloat("ecoPoint", ecoPoint);
    }
}

